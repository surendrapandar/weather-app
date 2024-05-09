import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const UserSearchInput = ({handleSubmit}: any) => {
  const [city, setCity] = useState<string>("");
  return (
    <form>
      <div className="flex max-w-xl mt-10 w-full m-auto  gap-2">
        <Input onChange={(e) => setCity(e.target.value)} className="bg-white h-9" type="text" placeholder="Please Enter City Name" />
        <Button onClick={(e) => handleSubmit(e, city)} type="submit">Search</Button>
      </div>
    </form>
  );
};

export default UserSearchInput;
