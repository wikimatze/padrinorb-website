require 'rake'
require 'colorator'

desc 'Deploy'
task :d do
  puts 'Building jekyll ..'.green
  system 'jekyll build'

  puts 'Deploying site with lovely rsync ..'.green
  system "rsync -vru -e \"ssh\" --del ?site/* xa6195@xa6.serverdomain.org:/home/www/padrinorb/"

  puts 'Done!'.green
end
