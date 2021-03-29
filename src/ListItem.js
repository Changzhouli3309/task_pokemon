import React from 'react';

function ListItem(props) {
    const { viewSwitch, getDateUrl, item, index } = props;

    function goDataPage() {
        viewSwitch();
        getDateUrl(item.url);
    }

    return (
        <>
            <label onClick={goDataPage}>{index + 1}. {item.name}</label>
        </>
    );
}

export default ListItem;