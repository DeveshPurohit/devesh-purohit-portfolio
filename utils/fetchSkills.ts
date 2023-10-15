import { Skill } from "@/typings";

export const fetchSkills = async() => {
    const res = await fetch(`https://u7be22v1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27skill%27%5D`,{ next: {
        revalidate: 10,
      },});
    const data = await res.json();
    const skills: Skill[] = data.result;
    // console.log(skills);
    return skills;
}