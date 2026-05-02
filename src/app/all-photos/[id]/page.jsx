import Image from "next/image";
import Link from "next/link";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch('https://pixen-blond.vercel.app/data.json');
    const photos = await res.json();
    // console.log(photos);

    const photo = photos.find(p => p.id == id)
    // console.log(photo);


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e8e3d3] px-4">
            <div className="max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden">

                {/* Image Section */}
                <div className="relative w-full h-full aspect-square">
                    <Image
                        src={photo?.imageUrl}
                        alt={photo?.title}
                        fill
                        className="w-full h-full object-cover"
                    />

                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        {photo?.category}
                    </span>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {photo?.title}
                        </h2>

                        <p className="text-gray-500 mt-2 text-sm">
                            {photo?.description}
                        </p>

                        <div className="mt-6 space-y-2 text-sm text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-400">DIMENSIONS</span>
                                <span className="ml-4">{photo?.dimensions || "80x80 cm"}</span>
                            </p>

                            <p>
                                <span className="font-semibold text-gray-400">MATERIAL</span>
                                <span className="ml-4">{photo?.category}</span>
                            </p>

                            {/* <p>
                                <span className="font-semibold text-gray-400">STATUS</span>
                                <span className="ml-4 text-green-600 font-semibold">
                                    {detailsCart?.stock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </p> */}
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-8">
                        <div>
                            <p className="text-xs text-gray-400">PRICE</p>
                            <h3 className="text-2xl font-bold text-blue-600">
                                ${photo?.price}
                            </h3>
                        </div>

                        <Link href="/all-photos">
                            <button className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
                                Go Back
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;