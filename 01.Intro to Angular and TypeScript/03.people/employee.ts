import {Junior, Senior, Manager} from './people';

const junior = new Junior('Mihail', 35);
junior.work();
junior.collectSalary();

const senior = new Senior('Stefan', 33);
senior.work();
senior.collectSalary();

const manager = new Manager('Vanq', 41);
manager.setDivident(500);
manager.work();
manager.collectSalary();