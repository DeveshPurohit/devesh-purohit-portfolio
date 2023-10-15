import { Social } from "@/typings";

export const fetchSocials = async() => {
    const res = await fetch(`https://u7be22v1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27social%27%5D`,{ next: {
        revalidate: 10,
      },});
    const data = await res.json();
    const socials: Social[] = data.result;
    // console.log(socials);
    return socials;
}