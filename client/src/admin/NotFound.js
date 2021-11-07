import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { useHistory } from "react-router";

const NotFound = (props) => {
    const history = useHistory();

    React.useEffect(() => {
        history.push("/");
    });

    return (
        <div>
            <Card>
                <Title title="Not Found" />
                <CardContent>
                    <h1>404: Page not found</h1>
                </CardContent>
            </Card>
        </div>
    );
}

export default NotFound;