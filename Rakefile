require 'middleman'

task :build do
  sh "middleman build --clean"
end

task :publish do
  sh "middleman build"
  sh "middleman deploy"
end

task :default => :publish
