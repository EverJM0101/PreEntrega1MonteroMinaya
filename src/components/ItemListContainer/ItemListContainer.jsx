import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList(props) {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={props.rutaImg}/>
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.children}
                </Card.Text>
                <Button variant="primary">Ir</Button>
            </Card.Body>
        </Card>
    );
}

function ItemListContainer() {
    return (
        <section className='d-flex mt-5 p-10 px-auto gap-5 flex-wrap justify-container-center align-items-center'>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/506/metallic-crumple-1185209.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/e03/christmas-gold-foil-1180869.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/420/snowflakes-2-1170373.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/bdc/snow-1383181.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/6a4/snow-1194236.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/4e9/winter-1-1359254.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
            <ItemList
                titulo="prueba titulo"
                rutaImg="https://images.freeimages.com/images/large-previews/d92/enchanted-forest-1191723.jpg?fmt=webp&h=350">
                CUALQUIER TEXTO....
            </ItemList>
        </section>
    );
}

export default ItemListContainer;