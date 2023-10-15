import { Experience } from "@/typings";

export const fetchExperience = async() => {
    const res = await fetch(`https://u7be22v1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27experience%27%5D+%7B%0A++...%2C+technologies%5B%5D-%3E%0A%7D`,{ next: {
        revalidate: 10,
      },});
    const data = await res.json();
    const experience: Experience[] = data.result;
    // console.log("heya ",experience);
    return experience;
}