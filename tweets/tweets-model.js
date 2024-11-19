// modelo - obtención de datos que necesita nuestra aplicación

// los tweets tienen q venir de SPARREST

export async function getTweets() {
  try {
    const response = await fetch("http://localhost:8000/api/dsd");
    const tweets = await response.json();
    
    if (!response.ok) {
      throw new Error("Recurso no existente");
    }

    return tweets;

  } catch (error) {
    throw new Error(error.message)
  }

  // try {
  //   const response = await fetch("http://localhost:8000/api/dsds");
  //   if (!response.ok) {
  //     throw new Error("Recurso no existente");
  //   }
  //   const tweets = await response.json();
  //   return tweets;
  // } catch (error) {
  //   return []
  // }

}
