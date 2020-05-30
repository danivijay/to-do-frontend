import React, { Fragment } from "react";
import groupBy from "lodash.groupby";
import dayjs from "dayjs";

const List = ({ items, markAsCompleted }) => {
  const activeItems = items.filter((item) => item.status === "active");
  const activeGroupedItems = groupBy(activeItems, "dueDate");

  const completedItems = items.filter((item) => item.status === "completed");

  console.log({ items });
  console.log({ activeItems });
  console.log({ activeGroupedItems });
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

const ActiveItemsList = ({ groupedItems, markAsCompleted }) => {
  return (
    <Fragment>
      {Object.keys(groupedItems).map((date) => (
        <div key={date}>
          <h3>{dayjs(date).format("YYYY-MM-DD")}</h3>
          {groupedItems[date].map((item, i) => (
            <div key={i}>
              <span>{item.label}</span>
              <button onClick={() => markAsCompleted(item.id)}>Complete</button>
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
};

const CompletedItemsList = ({ items }) => {
  return (
    <Fragment>
      <h3>Completed</h3>
      {items.map((item, i) => (
        <div key={i}>
          <div key={i}>
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default List;
