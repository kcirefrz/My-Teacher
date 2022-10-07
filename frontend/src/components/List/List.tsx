import { Button } from "@mui/material";
import {
  Description,
  EmptyList,
  Info,
  ItemList,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./List.style";
import { Teacher } from "../../@types/teacher";

interface ListProps {
  teachers: Teacher[];
}

export const List = ({ teachers }: ListProps) => {
  return (
    <div>
      {teachers.length > 0 ? (
        <ListStyled>
          {teachers.map((teacher) => (
            <ItemList key={teacher.id}>
              <Photo src={teacher.photo}></Photo>
              <Info>
                <Name>{teacher.name}</Name>
                <Value>
                  {teacher.value_hour.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  per hour
                </Value>
                <Description>{teacher.description}</Description>
                <Button sx={{ width: "70%" }}>Schedule Class with Erick</Button>
              </Info>
            </ItemList>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>No teachers found.</EmptyList>
      )}
    </div>
  );
};
