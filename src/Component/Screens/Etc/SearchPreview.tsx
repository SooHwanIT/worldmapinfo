import * as React from 'react';
interface SearchPreview{
    name:string;
    iso:string;
  }
const SearchPreview: React.FC<SearchPreview> = ({name,iso}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{iso}</td>
        </tr>
    );
};

export default SearchPreview;