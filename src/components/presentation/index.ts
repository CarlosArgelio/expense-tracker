import { program } from 'commander';

class TestCommand {
  init() {
    program
      .command('test')
      .description('test')
      .option('-t, --test', 'test')
      .action((options) => {
        console.log('test', options);
      });

    program
      .command('second')
      .description('second')
      .option('-s, --second', 'second')
      .action((options) => {
        console.log('second', options);
      });

    program.parse();
  }
}

new TestCommand().init();
