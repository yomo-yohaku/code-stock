const n=`.p-cards-event {
  display: grid;
  gap: 8px;
  max-width: 880px;
  margin-inline: auto;
}
@media screen and (min-width: 768px) {
  .p-cards-event {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (min-width: 1024px) {
  .p-cards-event {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.c-card-event {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
}
@media screen and (min-width: 768px) {
  .c-card-event {
    padding: 24px;
  }
}

.c-card-event__amount {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 8px;
}

.c-card-event__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-card-event__wrap {
  margin-top: 16px;
}

.c-card-event__title {
  font-size: 14px;
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .c-card-event__title {
    font-size: 16px;
  }
}

.c-card-event__text {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .c-card-event__text {
    font-size: 14px;
  }
}

.c-card-event__text.--omission {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.c-card-event__schedule {
  margin-top: 4px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .c-card-event__schedule {
    margin-top: 8px;
    font-size: 14px;
  }
}

.c-card-event__buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 16px;
}

.c-card-event__button-link {
  display: grid;
  justify-content: center;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
}

.c-card-event__button.--detail .c-card-event__button-link {
  color: #000;
  background-color: #fff;
  border: 1px solid #cad5e2;
}

.c-card-event__button.--reservation .c-card-event__button-link {
  color: #fff;
  background-color: #ff6900;
  border: 1px solid #ff6900;
}

@media (any-hover: hover) {
  .c-card-event__image {
    transition: scale 0.3s;
  }
  .c-card-event__link:hover .c-card-event__image {
    scale: 1.05;
  }

  .c-card-event__button.--detail .c-card-event__button-link {
    transition: color 0.3s;
  }
  .c-card-event__button.--reservation .c-card-event__button-link {
    transition: filter 0.3s;
  }
  .c-card-event__button.--detail .c-card-event__button-link:hover {
    color: #ff6900;
  }
  .c-card-event__button.--reservation .c-card-event__button-link:hover {
    filter: brightness(1.25);
  }
}

.p-cards-event-2 {
  display: grid;
  gap: 8px;
  max-width: 880px;
  margin-inline: auto;
}
@media screen and (min-width: 768px) {
  .p-cards-event-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (min-width: 1024px) {
  .p-cards-event-2 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.c-card-event-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
@media screen and (min-width: 768px) {
  .c-card-event-2 {
    padding: 24px;
  }
}

.c-card-event-2__link {
  display: grid;
  grid-template-columns: 50% 1fr;
  gap: 12px;
  padding: 12px;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__link {
    display: block;
    grid-template-columns: none;
    gap: 0;
    padding: 0;
  }
}

.c-card-event-2__amount {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 8px;
}

.c-card-event-2__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-card-event-2__wrap {
  margin-top: 0;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__wrap {
    margin-top: 16px;
  }
}

.c-card-event-2__title {
  font-size: 13px;
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__title {
    font-size: 16px;
  }
}

.c-card-event-2__text {
  display: none;
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__text {
    display: block;
  }
}

.c-card-event-2__schedule {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__schedule {
    margin-top: 8px;
    font-size: 14px;
  }
}

.c-card-event-2__buttons {
  display: none;
}
@media screen and (min-width: 768px) {
  .c-card-event-2__buttons {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-top: 12px;
  }
}

.c-card-event-2__button-link {
  display: grid;
  justify-content: center;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
}

.c-card-event-2__button.--detail .c-card-event-2__button-link {
  color: #000;
  background-color: #fff;
  border: 1px solid #cad5e2;
}

.c-card-event-2__button.--reservation .c-card-event-2__button-link {
  color: #fff;
  background-color: #ff6900;
  border: 1px solid #ff6900;
}

@media (any-hover: hover) {
  .c-card-event-2__image {
    transition: scale 0.3s;
  }
  .c-card-event-2__link:hover .c-card-event-2__image {
    scale: 1.05;
  }

  .c-card-event-2__button.--detail .c-card-event-2__button-link {
    transition: color 0.3s;
  }
  .c-card-event-2__button.--reservation .c-card-event-2__button-link {
    transition: filter 0.3s;
  }
  .c-card-event-2__button.--detail .c-card-event-2__button-link:hover {
    color: #ff6900;
  }
  .c-card-event-2__button.--reservation .c-card-event-2__button-link:hover {
    filter: brightness(1.25);
  }
}
`;export{n as c};
