import React, { ChangeEvent, useEffect, useState } from 'react';
import { conversationType } from '../../App';



interface SearchProps {
  searchdata: conversationType[];
  setsearchdata: (data: conversationType[]) => void;
  conversations: conversationType[];
}

const Search: React.FC<SearchProps> = ({ searchdata, setsearchdata, conversations }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setsearchdata(conversations);
    } else {
      const results = searchdata.filter(conversation =>
        conversation.name.toLowerCase().includes(searchTerm)
      );
      setsearchdata(results);
    }
  };

  return (
    <div className="row searchBox">
      <div className="col-sm-12 searchBox-inner">
        <div className="form-group has-feedback">
          <input
            id="searchText"
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <span className="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </div>
    </div>
  );
};

export default Search;
