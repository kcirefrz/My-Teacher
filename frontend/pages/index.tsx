import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Teacher } from "../src/@types/teacher";
import { List } from "../src/components/List/List";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Erick Fares",
      photo: "https://github.com/kcirefrz.png",
      description: "Parkour Classes",
      value_hour: 150,
    },
    {
      id: 2,
      name: "Erick Fares 2",
      photo: "https://github.com/kcirefrz.png",
      description: "Taekwondo Classes",
      value_hour: 250,
    },
    {
      id: 3,
      name: "Erick Fares 3",
      photo: "https://github.com/kcirefrz.png",
      description: "Systema Classes",
      value_hour: 350,
    },
    {
      id: 4,
      name: "Erick Fares 4",
      photo: "https://github.com/kcirefrz.png",
      description: "Programming Classes",
      value_hour: 500,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <List teachers={teachers} />
    </Box>
  );
};

export default Home;
