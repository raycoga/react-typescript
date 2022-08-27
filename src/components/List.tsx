import React, { memo, Fragment } from "react";
import { Sub } from "../types";

interface Props {
  children?: JSX.Element[]; // React.ReactNode |
  subs: Array<Sub>;
}
const List = memo(({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => (
      <li key={sub.nick}>
        <a href={sub.website}>{sub.nick} website</a>
        <h4>
          {sub.nick} (<small>{sub.email}</small>)
        </h4>
        <p>{sub.phone}</p>
      </li>
    ));
  };
  return <Fragment>{renderList()}</Fragment>;
});

export default List;
