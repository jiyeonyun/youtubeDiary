import React from 'react';
import Header from '../../components/header/header';
import {connect} from 'react-redux';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';
const Bookmark = ({authService,youtube,props}) => {
    const item = props.state;
    return(
        <div>
        <Header/>
        { item &&
            item.map((a)=>{
                return( <BookmarkItem item={a} youtube={youtube} authService={authService}/>)
            })
        }
        </div>
    );
};
function connec(state){
    return {state : state}
}  
export default connect(connec)(Bookmark);