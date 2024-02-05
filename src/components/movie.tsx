"use client";
import Link from "next/link";
import styles from "../../styles/movie.module.css";
import { useEffect, useRef } from "react";
interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function Movie(movie: MovieProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    console.log(imgRef);
    imgRef.current.addEventListener("mousemove", function (e) {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateX = (-1 / 5) * x + 20;
      const rotateY = (-1 / 5) * y + 20;
      const style = imgRef.current.style;
      console.log(x, y, rotateX, rotateY);
      style.transform = `rotateX(${rotateY}deg)`;
    });
  }, []);

  return (
    <div className={styles.movie}>
      <img ref={imgRef} src={movie.poster_path} alt={movie.title}></img>
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}
