// Classe abstrata para os estados das tarefas
class TaskState {
    constructor(task) {
      this.task = task;
    }
  
    start() {}
    complete() {}
    cancel() {}
  }
  
  // Estados concretos das tarefas
  class ToDoState extends TaskState {
    start() {
      console.log('Tarefa em andamento...');
      this.task.setState(new InProgressState(this.task));
    }
  }
  
  class InProgressState extends TaskState {
    complete() {
      console.log('Tarefa concluída!');
      this.task.setState(new CompletedState(this.task));
    }
  
    cancel() {
      console.log('Tarefa cancelada.');
      this.task.setState(new CancelledState(this.task));
    }
  }
  
  class CompletedState extends TaskState {
    // Nenhum método precisa ser implementado para o estado concluído
  }
  
  class CancelledState extends TaskState {
    // Nenhum método precisa ser implementado para o estado cancelado
  }
  
  // Classe de tarefa que utiliza o padrão State
  class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.state = new ToDoState(this);
    }
  
    setState(newState) {
      this.state = newState;
    }
  
    start() {
      this.state.start();
    }
  
    complete() {
      this.state.complete();
    }
  
    cancel() {
      this.state.cancel();
    }
  }
  
  // Exemplo de uso
  const task = new Task('Comprar mantimentos', 'Comprar leite, ovos, pão.');
  console.log(`Tarefa: ${task.title}`);
  console.log(`Descrição: ${task.description}`);
  
  task.start(); // Inicia a tarefa
  task.complete(); // Completa a tarefa
  
  // Não será possível executar o cancelamento após a tarefa ser concluída
  task.cancel(); // Tentativa de cancelar após a conclusão