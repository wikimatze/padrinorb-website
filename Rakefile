require 'rake'
require 'colorator'
require 'cssminify'
require 'uglifier'


# Credit for this goes to https://gist.github.com/alexyoung/143571
desc 'Create tags page'
task :t do
  puts 'Generating tags...'.green
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters

  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')

  html =<<-HTML
---
title: Tags
layout: page
---

{% include header_navigation.html %}

<section id="contribute">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="section-heading">Tags</h1>
        <p class="large">The list of all Padrino tags.</p>
      </div>
    </div>
  </div>
</section>

<div class="container">

  <div class="row">
    <div class="col-md-12">

  HTML

  site.categories.sort.each do |category, posts|
  html << <<-HTML

      <h4 id="#{category}">#{category}</h4>
  HTML

    html << '    <ul class="posts">'
    posts.each do |post|
      post_data = post.to_liquid
      html << <<-HTML

      <li>
        <div>#{date_to_string post.date}</div>
        <a href="#{post.url}">#{post_data['title']}</a>
      </li>
      HTML
    end
  html << '    </ul>'
  end

  File.open('tags.html', 'w+') do |file|
    file.puts html
    3.times do
      file.puts "</div>"
    end
  end

  puts 'Done.'
end

desc 'Deploy'
task :d => :t do
  puts 'Building jekyll ..'.green
  system 'jekyll build'

  puts 'Minify css and merge it into one file ..'.yellow

  File.open('_site/css/application.css', 'w') do |file|
    file.write(CSSminify.compress(File.open('_site/css/style.css')))
  end

  system "rm _site/css/style.css && mv _site/css/application.css _site/css/style.css"

  puts "Done with css minifying"


  File.open('_site/js/tmp.js', 'w') do |file|
    file.write(Uglifier.compile(File.open('_site/js/application.js')))
  end

  system "mv _site/js/tmp.js _site/js/application.js"


  puts 'Deploying site with lovely rsync ..'.green
  system "rsync -vru -e \"ssh\" --del ?site/* xa6195@xa6.serverdomain.org:/home/www/padrinorb/"

  puts 'Done!'.green
end
