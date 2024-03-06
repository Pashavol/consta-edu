import {Grid, GridItem} from "@consta/uikit/Grid";
import {Card} from "@consta/uikit/Card";
import {Text} from "@consta/uikit/Text";
import styles from "./style.module.css"

const Layout = ({isBlue = true}) => {
    return <Grid cols={3} gap="xl">
        <GridItem
            //className={`${styles.blue} pupa`}
            className={`${isBlue ? styles.blue: ""} pupa`}
            row={1}
            breakpoints={{
                800: {
                    row: 3,
                },
            }}
        >
            <Card verticalSpace="xs" horizontalSpace="xs">
                <Text>Отступы 'xs'</Text>
            </Card>
        </GridItem>
        <GridItem>2</GridItem>
        <GridItem
            style={{background: '#36acaa'}} // зелёная ячейка
            order={-1}
            row={3}
            breakpoints={{
                800: {
                    order: 0,
                    row: 1,
                },
            }}
        >
            3
        </GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
    </Grid>
}

export default Layout
