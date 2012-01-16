#!/usr/bin/perl -W

my %wordcount = ();

open (theFile, 'p62258-inter.json');

while(my $line = <theFile>)
{
    chomp($line);
    my @words = split(/\W+/, $line);
    foreach my $word(@words)
    {
        $wordCount{$word} += 1;
    }
}

# output
foreach my $key(keys %wordCount)
{
    print "Word: $key Repeat_Count: " . ($wordCount{$key} - 1) . "\n";
}
close (theFile);
