import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { POST_REQUEST_STATUS } from '../../store/reducer/Post'
import { addPost, fetchPost, fetchPostByAxios } from '../../store/actions/Post'


export default function Post (props){
    const { status, list } = useSelector((state) => state.post)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchPost())
    const loadDataByAxios = () => dispatch(fetchPostByAxios())
    const clearData = () => dispatch(addPost([]))

    React.useEffect(() => {
      loadDataByAxios()
      }, [])
    
    
    if (status === POST_REQUEST_STATUS.LOADING) {
      return <p>Loading...</p>
  }

  return (
      <div>
          <h1>POSTS</h1>
          <Button onClick={loadData}>#</Button>
          <Button onClick={clearData}>#</Button>

          {status !== POST_REQUEST_STATUS.ERROR ? (
              <ol className="bordered">
                  {list.map((postItem) => (
                      <li key={postItem.id}>
                          <p>{postItem.title}</p>
                      </li>
                  ))}
              </ol>
          ) : (
            <div>
              <p style={{ color: 'red' }}>ERROR!!!</p>
              <button onClick={loadData}>Try again</button>
              </div>
          )}
      </div>
  )


}