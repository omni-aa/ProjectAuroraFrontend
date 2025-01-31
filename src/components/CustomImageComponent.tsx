import React from "react";
import {urlForImage} from "@/lib/sanity.ts";
import {SanityImageType} from "@/Layout/Guides/NewPlayerGuides/NewPlayerInterface/Interface.ts";

const CustomImageComponent: React.FC<{ value: SanityImageType }> = ({ value }) => {
    if (!value?.asset) return null;

    return (
        <img
            src={urlForImage(value).url()}
            alt={value.alt || 'Guide Image'}
            className="rounded-xl my-6 w-full object-cover max-h-[600px]
            shadow-md hover:shadow-xl
            dark:shadow-sm dark:hover:shadow-md
            brightness-95 hover:brightness-100
            dark:brightness-90 dark:hover:brightness-100"
        />
    );
};

export default CustomImageComponent;