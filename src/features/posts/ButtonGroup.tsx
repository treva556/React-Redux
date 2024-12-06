import { destroyPostAsync} from './postSlice'

function ButtonGroup(props:any) {

    function handleClick(e:any) {
        const payload = {
            post: {
                post_id: props.post_id
            }
        }
        props.dispatch(destroyPostAsync(payload));
    }
  return <div className="btn-group float-end">
      <button 
        className=" p-1 border rounded-lg border-black m-2 hover:bg-green-700 hover:text-white"
        onClick={() => props.toggleEditForm()}>Edit</button>
      <button 
      className=" p-1 border rounded-lg border-black m-2 hover:bg-red-700 hover:text-white" 
      onClick={(e) => handleClick(e)}>Delete</button>
  </div>;
}

export default ButtonGroup;