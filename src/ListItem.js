function ListItem({ItemData}) {
    return (
      <>
          <a href={ItemData.url}><strong> {ItemData.name}</strong>
          </a>
      </>
    );
  }
  
  export default ListItem;