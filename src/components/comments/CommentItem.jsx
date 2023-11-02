import React , {useEffect, useState} from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/usersActions";
import { addLike } from "../../store/comments/commentActions";

const CommentItem = ({ item }) => {
    const { oneUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  const com = item.likes.find(res => res.userId === oneUser.id)
  if (com){
    setShow(true)
    }

  function tabLike(){
    dispatch(addLike({user: oneUser, id: item.id}))
    console.log('like')
}

  return (
    <div className="mb-4 w-full relative rounded-lg border border-gray-200 shadow-lg">
      <div className="flex items-center gap-4 p-4">
        <div
          style={{ backgroundColor: item.color }}
          className="h-12 w-12 rounded-[50px] bg-red-600 flex justify-center items-center"
        >
          <h4 className="text-xl">{item.first_name[0]}</h4>
        </div>

        <div>
          <p className="font-light text-gray-500">
            @{item.first_name} {item.last_name}
          </p>

          <p className="line-clamp-1 text-lg text-gray-900">{item.comment}</p>
        </div>
        <div className="absolute right-4 flex">
            {show? (
                <BiSolidLike />
            ) : (
                <BiLike 
            onClick={tabLike}
           className="mr-4"/>
            )}

        </div>
      </div>
    </div>
  );
};

export default CommentItem;
