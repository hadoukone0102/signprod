import BannierView from "@/shared/components/bannier.component";

export default function HomeView() {
    return (
        <div className="flex flex-col gap-4">
            <BannierView/>
            {/* content */}
            <div className="">
                <h1 className="text-red-500">Home View</h1>
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            </div>
        </div>
    );
}