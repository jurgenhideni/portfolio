import React from "react";
import { Rating } from "semantic-ui-react";

const RatingExampleStar = () => (
  <Rating icon="star" defaultRating={3} maxRating={4} />
);

export default RatingExampleStar;

<div class="ui star rating" role="radiogroup" tabindex="-1">
  <i
    tabindex="0"
    aria-checked="false"
    aria-posinset="1"
    aria-setsize="4"
    class="active icon"
    role="radio"
  ></i>
  <i
    tabindex="0"
    aria-checked="false"
    aria-posinset="2"
    aria-setsize="4"
    class="active icon"
    role="radio"
  ></i>
  <i
    tabindex="0"
    aria-checked="true"
    aria-posinset="3"
    aria-setsize="4"
    class="active icon"
    role="radio"
  ></i>
  <i
    tabindex="0"
    aria-checked="false"
    aria-posinset="4"
    aria-setsize="4"
    class="icon"
    role="radio"
  ></i>
</div>;
