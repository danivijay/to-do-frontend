import React, { Fragment } from "react";
import groupBy from "lodash.groupby";
import dayjs from "dayjs";
import styled from "styled-components";

import Button from "components/designSystem/Button";

const List = ({ items, markAsCompleted }) => {
  console.log({ items });
  // if (!items) return <>;
  const activeItems = items.filter((item) => item.status === "active");
  const activeGroupedItems = groupBy(activeItems, "dueDate");

  const completedItems = items.filter((item) => item.status === "completed");

  // console.log({ items });
  // console.log({ activeItems });
  // console.log({ activeGroupedItems });
  return (
    <div>
      <ActiveItemsList
        groupedItems={activeGroupedItems}
        markAsCompleted={markAsCompleted}
      />
      <CompletedItemsList items={completedItems} />
    </div>
  );
};

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 5px;
  border-bottom: 1px solid #dadada;
  border-radius: 2px;
`;

const ItemTitleBlock = styled.h3`
  width: 100%;
  text-align: left;
  padding: 0;
  margin: 20px 0 10px 0;
`;

const ButtonBlock = styled.div`
  flex-shrink: 10;
  align-self: flex-end;
`;

const LabelBlock = styled.div`
  width: 100%;
  text-align: left;
  word-wrap: break-word;
`;

const ActiveItemsList = ({ groupedItems, markAsCompleted }) => {
  const dates = Object.keys(groupedItems).reverse();
  return (
    <Fragment>
      {dates.map((date) => (
        <Fragment key={date}>
          <ItemTitleBlock>{dayjs(date).format("DD-MM-YYYY")}</ItemTitleBlock>
          {groupedItems[date].map((item, i) => (
            <ItemBlock key={i}>
              <LabelBlock>{item.label}</LabelBlock>
              <ButtonBlock>
                <Button onClick={() => markAsCompleted(item.id)}>✔</Button>
              </ButtonBlock>
            </ItemBlock>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
};

const CompletedItemBlock = styled.div`
  width: 100%;
  text-align: left;
  word-wrap: break-word;
  text-decoration: line-through;
`;

const CompletedItemsList = ({ items }) => {
  return (
    <Fragment>
      <ItemTitleBlock>Completed</ItemTitleBlock>
      {items.map((item, i) => (
        <CompletedItemBlock key={i}>{item.label}</CompletedItemBlock>
      ))}
    </Fragment>
  );
};

export default List;
