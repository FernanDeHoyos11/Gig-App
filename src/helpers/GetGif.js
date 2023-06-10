export const getGif = async(category) => {
    const api_key = 'WezORzsF1SMJb8RqyABI9SyGtJvU6xIu';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WezORzsF1SMJb8RqyABI9SyGtJvU6xIu&q=${category}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();
  
    const Gif = await data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return Gif;
  }