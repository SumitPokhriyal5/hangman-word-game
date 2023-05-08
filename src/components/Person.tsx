import {ChangeEvent, FC, useState} from 'react';

export enum HairColor {
    Blonde = "Your hair is Blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow this is so cool"
}

interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
}



export const Person: FC<Props> = ({name, email, age, hairColor}) => {

    const [country, setCountry] = useState<string | null>("");

    type NameType = "Sumit" | "Amit" | "";

    const nameForType: NameType = ""


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input type="text" placeholder='Write down your country...' onChange={handleChange} />
      <h1>{country}</h1>
      <h1>{hairColor}</h1>
    </div>
  );
}
