/*

    Dynamic styles with css modules

    To dynamically inject styles on the components we can use {}. We need to always remember that first we need to
    add the resolved styles and then add the style which is added dynamically.

    For example -
    import styles from "./fileName.css";

    <div className = {`${styles["form-control"]} ${!isValid && styles.invalid}`}>

    For adding media queries we add them as we would normally add them in css.

 */