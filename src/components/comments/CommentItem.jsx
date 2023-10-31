import React from "react";

const CommentItem = ({ item }) => {
  const style = {
    backgroundColor: item.color,
  };

  return (
    <div className="mb-4 w-full relative rounded-lg border border-gray-200 shadow-lg">
      <div className="flex items-center gap-4 p-4">
        <div
          style={{ backgroundColor: item.color }}
          className="h-12 w-12 rounded-[50px] bg-red-600 flex justify-center items-center"
        ><h4 className="text-xl">{item.first_name[0]}</h4></div>

        <div>
          <p className="font-light text-gray-500">@{item.first_name} {item.last_name}</p>

          <p className="line-clamp-1 text-lg text-gray-900">
            {item.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
