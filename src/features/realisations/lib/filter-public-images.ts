import fs from "fs";
import path from "path";
import type { Project } from "../data/projects.data";

/** Indique si le chemin `/…` existe sous `public/` (fichier uniquement). */
export function publicAssetFileExists(urlPath: string): boolean {
  if (!urlPath.startsWith("/")) return false;
  const relative = urlPath.slice(1);
  const full = path.join(process.cwd(), "public", ...relative.split("/"));
  try {
    return fs.existsSync(full) && fs.statSync(full).isFile();
  } catch {
    return false;
  }
}

/** Supprime couverture et entrées de galerie dont le fichier n’est plus sur le disque. */
export function projectsWithExistingImages(projects: Project[]): Project[] {
  return projects.map((p) => {
    const coverImage =
      p.cover.image && publicAssetFileExists(p.cover.image) ? p.cover.image : undefined;
    const gallery = (p.gallery ?? []).filter((src) => publicAssetFileExists(src));
    return {
      ...p,
      cover: { ...p.cover, image: coverImage },
      gallery: gallery.length > 0 ? gallery : undefined,
    };
  });
}
