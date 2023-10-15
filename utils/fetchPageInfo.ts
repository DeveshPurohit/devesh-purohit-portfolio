import { PageInfo } from "@/typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`https://u7be22v1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27pageInfo%27%5D%5B0%5D`,{ next: {
        revalidate: 10,
      },});
    const data = await res.json();
    const pageInfo: PageInfo = data.result;
    // console.log("heya : ",pageInfo);
    return pageInfo;
}