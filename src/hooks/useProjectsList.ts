import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const SPACE_ID = "8lz29owteu2j";
const TOKEN = process.env.CONTENTFUL_TOKEN;

type ContentfulResponse = {
    items: ContentfulEntry[];
};

type ContentfulField = {
    title: string;
    description: string;
    source: string;
};

type ContentfulEntry = {
    fields: ContentfulField;
    sys: {
        id: string;
    };
    metadata: {
        tags: {
            sys: {
                type: string;
            };
        }[];
    };
};

async function fetchProjects() {
    const response = await axios.get(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${TOKEN}&content_type=project`,
    );

    return response.data as ContentfulResponse;
}

export default function useProjectsList() {
    const { data, isSuccess, ...rest } = useQuery({
        queryKey: ["projects", "list"],
        queryFn: fetchProjects,
    });

    const transformedData = React.useMemo(() => {
        if (!isSuccess) return;
        const { items } = data;
        console.log("kufufu", items);
        return items
            .sort((a) => (a.metadata.tags.length > 0 ? -1 : 1))
            .map((item) => {
                const { fields } = item;
                return {
                    title: fields.title,
                    description: fields.description,
                    url: fields.source,
                };
            });
    }, [data, isSuccess]);

    return {
        data: transformedData,
        isSuccess,
        ...rest,
    };
}
