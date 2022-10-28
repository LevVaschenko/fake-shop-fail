import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type Props = {
    name: string
    descriprion: string
    type: string
    size: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.descriprion}</p>
                <div>Type: {props.type}</div>
                <div>Size: {props.size} GB</div>
                <div>Price: {props.price} $</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
