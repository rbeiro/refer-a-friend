import Image from "next/image";
import styles from "./styles.module.scss";
import { ScheduleForm } from "./ScheduleForm";

const Schedule = () => {
  return (
    <main className={styles["container"]}>
      <div className={styles["user__container"]}>
        <div className={styles["user__avatar"]}>
          <Image
            className={styles["user__avatar--image"]}
            src="https://github.com/diego3g.png"
            width={460}
            height={460}
            alt=""
          />
        </div>
        <h3>Diego Fernandes</h3>
        <span>CTO @rocketseat</span>

        <ScheduleForm />
      </div>
    </main>
  );
};

export default Schedule;
