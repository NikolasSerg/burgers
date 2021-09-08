import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Dbl_Royal_Cheese.png?$Product_Desktop$"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Дабл Роял Чізбургер
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Наш подвійний улюбленець – Роял ДаблЧізбургер. У ньому є все, за що ми любимо Роял Чіз – булочка Квотер, подвіний Чеддер, маринований огірок зі свіжою цибулею і два соуси.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
