import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ClientDetails() {
  const { query } = useRouter();

  const router = useRouter()

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [client, setClient] = useState(null);


  const handleDelete = () => {
    fetch(`http://localhost:3000/api/v1/client/${query.clientId}`, {
        method: 'DELETE'
      });

    router.push("/")
  }

  useEffect(() => {
    if (!query.clientId) {
      return;
    }

    fetch(`http://localhost:3000/api/v1/clients/${query.clientId}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setClient(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [query.clientId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (client) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Client
          </Typography>
          <Typography variant="h4" component="div">{client.name}</Typography>
          <Typography variant="body2">Sex: {client.sex}</Typography>
          <Typography variant="body2">Age: {client.age}</Typography>
          <Typography variant="body2">Birthday: {client.birthday}</Typography>
          <Typography variant="body2">City Id: {client.city_id}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ handleDelete }>Delete</Button>
        </CardActions>
      </Card>
    );
  }
}
