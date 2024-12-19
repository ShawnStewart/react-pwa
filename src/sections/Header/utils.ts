import { jokes } from '@/config/it-jokes';

export function getRandomJoke() {
  const randomIndex = Math.round(Math.random() * (jokes.length - 1));
  const randomJoke = jokes[randomIndex];

  return randomJoke;
}
