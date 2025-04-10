
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchCrops } from '@/services/mockDataService';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Crops = () => {
  const { data: crops, isLoading } = useQuery({
    queryKey: ['crops'],
    queryFn: fetchCrops
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Crop Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Crop Database</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-8 bg-gray-100 animate-pulse rounded"></div>
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Season</TableHead>
                    <TableHead>Water</TableHead>
                    <TableHead>Fertilizer</TableHead>
                    <TableHead className="text-right">Yield</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops?.map((crop) => (
                    <TableRow key={crop.id}>
                      <TableCell className="font-medium">{crop.name}</TableCell>
                      <TableCell>{crop.season}</TableCell>
                      <TableCell>{crop.waterRequirement}</TableCell>
                      <TableCell>{crop.fertilizerRequirement}</TableCell>
                      <TableCell className="text-right">{crop.yieldPerAcre} units/acre</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Add New Crop</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Crop adding functionality will be implemented in the next version.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Crops;
