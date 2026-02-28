import Image from "next/image";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

interface Props {
    title: string;
    description: string[];
    image: string;
    reverse?: boolean;
    dark?: boolean;
}

export default function PressHopWorksCard({
    title,
    description,
    image,
    reverse = false,
    dark = false,
}: Props) {
    return (
        <Card
            className={clsx(
                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8",
                dark ? "bg-black dark:bg-[#262626] text-white" : "bg-white dark:bg-black",

            )}
        >
            <div
                className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                    reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                )}
            >
                {/* Image */}
                <div >
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                {/* Content */}
                <div>
                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                        {title}
                    </h3>

                    <div className="space-y-4 text-sm md:text-base opacity-90">
                        {description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>

                    <button className="mt-4 text-sm font-medium underline opacity-80 hover:opacity-100">
                        Read more…
                    </button>
                </div>
            </div>
        </Card>
    );
}
