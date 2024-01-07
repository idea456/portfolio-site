import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;
const TOKEN = import.meta.env.CONTENTFUL_TOKEN;

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
        `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=project`,
        {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        },
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
