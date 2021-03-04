import React,{useState} from 'react';

const SearchBar = (props) => {
    const [term,setTerm]=useState("");
    const onInputChange=(e)=>{
        setTerm(e.target.value);
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
       // console.log(term);
       props.onSubmit(term);
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label>Image Search: </label><br/>
                <input type="text" onChange={onInputChange} value={term}/>
            </form>
        </div>
    );
};

export default SearchBar;