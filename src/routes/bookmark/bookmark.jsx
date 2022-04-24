import React from 'react';
import Header from '../../components/header/header';
import {connect, useSelector} from 'react-redux';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';
const Bookmark = ({authService,youtube}) => {
    let list = useSelector(state=>state);
    return(
        <div>
        <Header/>
        { 
            list.map((a)=>{
                return( <BookmarkItem key={a.id} item={a} youtube={youtube} authService={authService}/>)
            })
        }
        </div>
    );
};
export default Bookmark;