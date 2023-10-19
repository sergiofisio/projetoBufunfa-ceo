import { HeaderCompany } from "../header/header";
import imgTask from "../../assets/icons/task.svg";
import Button from "../button/button";
import plus from "../../assets/icons/plus.svg";
import Task from "../task/task";
import { useState } from "react";
import TaskFunctions from "../task/task.function";

export default function CompanyTasks({ tasks }: { tasks: any }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-5/6 relative">
      <HeaderCompany img={imgTask} text="Lista de tarefas" />
      <div className="w-full h-[90%] overflow-y-scroll scrollbar-thin scrollbar-thumb-purpleDark">
        <div className="p-4 flex flex-col gap-4">
          <Button text="Validar tarefas" color="purple" />
          <div
            className="flex items-center justify-center border-2 border-purpleDark border-solid rounded-3xl w-full h-10 gap-3 "
            onClick={() => {}}
          >
            <img className="w-5" src={plus} alt="plus icon" />
            <h2
              onClick={() => {
                setShowModal(true);
              }}
              className="text-subTitle2"
            >
              Nova tarefa
            </h2>
          </div>
        </div>
        {tasks.map(({ task }: any, key: number) => {
          return (
            <div key={key}>
              <Task
                id={task.id}
                title={task.title}
                description={task.description}
                value={task.value}
                classname={key % 2 === 0 ? "" : "bg-[#E9E9EA]"}
                setShowModal={setShowModal}
              />
            </div>
          );
        })}
      </div>
      {showModal && (
        <TaskFunctions setShowModal={setShowModal} id={showModal} />
      )}
    </div>
  );
}
