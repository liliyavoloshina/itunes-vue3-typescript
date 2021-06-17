<template>
  <slot></slot>
</template>

<style lang="scss">
.item {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em;
  margin-top: 2em;
  @include glass-card;

  .image {
    border: 1px solid #fff;
    height: 10em;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 9em;
    font-size: 1.1em;
    .label {
      font-weight: 700;
      color: black;
    }
    a {
      color: #e73c7e;

      &:hover {
        color: #23a6d5;
      }
    }
  }

  .audio {
    width: 100%;
    audio {
      width: 100%;
      outline: none;
    }
  }
}
</style>